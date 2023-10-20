import { Button } from "antd";
import { Link } from "react-router-dom";

import { faNoteSticky, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Styled from "./styles";

const Menu = () => {
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
        </Styled.CreateNote>
      </Styled.Links>
    </>
  );
};

export default Menu;
