import { useLocalStorageState } from "ahooks";
import type { MenuProps } from "antd";
import { Button, Checkbox, Dropdown, Radio, Select, Space } from "antd";
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
import _, { values } from "lodash";
import { useState } from "react";

const Menu = () => {
  const [notes, setNotes] = useLocalStorageState<noteData[]>(
    "use-local-storage-state-demo1"
  );
  const [sort, setSort] = useState<string | undefined>(undefined)

 

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

<Select 
  placeholder="Sort by"
  onChange={(value) => setSort(value)}
  options={[
    { value: "Title"},
    { value: "Description"},
    { value: "Date"},
  ]}
  
/>
          
          <Styled.Radios>
            <Radio>
              A <FontAwesomeIcon icon={faArrowRight} color="#d1d1d1" />{" "}
              <Space>Z</Space>
            </Radio>

            <Radio>
              Z <FontAwesomeIcon icon={faArrowRight} color="#d1d1d1" />{" "}
              <Space>A</Space>
            </Radio>
          </Styled.Radios>

          
           
          
        </Styled.CreateNote>
      </Styled.Links>
    </>
  );
};

export default Menu;
