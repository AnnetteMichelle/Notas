import { useLocalStorageState } from "ahooks";
import type { MenuProps } from "antd";
import { Button, Checkbox, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

import {
  faArrowRight,
  faCaretDown,
  faNoteSticky,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { noteData } from "../notes/types";
import Styled from "./styles";

const Menu = () => {
  const [notes, setNotes] = useLocalStorageState<noteData[]>(
    "use-local-storage-state-demo1"
  );

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <p>Title</p>,
    },
    {
      key: "2",
      label: <p>Description</p>,
    },
    {
      key: "3",
      label: <p>Date</p>,
    },
  ];

  return (
    <>
      <Styled.Links>
        <Button
          icon={<FontAwesomeIcon icon={faNoteSticky} color="#1677ff" />}
          type="link"
        >
          <Link to="/">Notes</Link>
        </Button>

        <Styled.CreateNote>
          <Button
            icon={<FontAwesomeIcon icon={faPlus} color="#959597" />}
            type="link"
          >
            <Link to="../createNote">Create Note</Link>
          </Button>

          <Dropdown menu={{ items }} placement="bottomRight">
            <Button
              icon={<FontAwesomeIcon icon={faCaretDown} color="#959597" />}
            >
              Sort by
            </Button>
          </Dropdown>
          <Styled.checkbox>
            <Checkbox>
              A <FontAwesomeIcon icon={faArrowRight} color="#d1d1d1" />{" "}
              <Space>Z</Space>
            </Checkbox>
          </Styled.checkbox>

          <Styled.ReverseOrder>
            <Checkbox>
              Z <FontAwesomeIcon icon={faArrowRight} color="#d1d1d1" />{" "}
              <Space>A</Space>
            </Checkbox>
          </Styled.ReverseOrder>
        </Styled.CreateNote>
      </Styled.Links>
    </>
  );
};

export default Menu;
