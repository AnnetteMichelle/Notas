import { useEffect, useState } from "react";

import type { RadioChangeEvent } from "antd";
import { Button, Radio, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";

import {
  faArrowRight,
  faNoteSticky,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Styled from "./styles";
import { MenuProps } from "./types";

const Menu = ({ onOrderAsc }: MenuProps) => {
  const [sort, setSort] = useState<"title" | "text" | "dateToCreate">("title");
  const [radioActive, setRadioActive] = useState<"asc" | "desc">("desc");

  const onSaveRadioActive = (e: RadioChangeEvent) => {
    setRadioActive(e.target.value);
  };

  useEffect(() => {
    onOrderAsc &&
      onOrderAsc({ selectedOrder: radioActive, selectedSortBy: sort });
  }, [sort, radioActive]);

  const navigate = useNavigate();
  const onNote = () => {
    navigate("/");
  };

  const onCreateNote = () => {
    navigate("../createNote");
  };

  return (
    <>
      <Styled.CreateNote>
        <Button
          icon={<FontAwesomeIcon icon={faNoteSticky} color="#5a9efd" />}
          type="link"
          onClick={onNote}
        >
          Notes
        </Button>

        <Button
          icon={<FontAwesomeIcon icon={faPlus} color="#0455c5" />}
          type="link"
          onClick={onCreateNote}
        >
          Create Note
        </Button>
        <Select
          placeholder="Sort by"
          value={sort}
          onChange={(selectedSortBy) => setSort(selectedSortBy)}
          options={[
            { value: "title", label: "Title" },
            { value: "text", label: "Text" },
            { value: "dateToCreate", label: "Date" },
          ]}
        />
        <Styled.Radios>
          <Radio.Group onChange={onSaveRadioActive} value={radioActive}>
            <Radio value={"desc"}>
              A
              <FontAwesomeIcon
                icon={faArrowRight}
                color="#b6b6b6"
                size={"2xs"}
              />
              <Space>Z</Space>
            </Radio>

            <Radio value={"asc"}>
              Z
              <FontAwesomeIcon
                icon={faArrowRight}
                color="#b6b6b6"
                size={"2xs"}
              />
              <Space>A</Space>
            </Radio>
          </Radio.Group>
        </Styled.Radios>
      </Styled.CreateNote>
    </>
  );
};

export default Menu;
