import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Alert } from "react-bootstrap";

function Capsules() {
  return (
    <>
      <div className="mb-3">
        <h4>CAPSULES</h4>

        <p>
          The capsules can be created in 2 ways, individually or in groups,
          previously the database connection credentials must be written from{" "}
          <Badge bg={"secondary"}>.env</Badge>, the capsules are mapped from the
          tables obtained from the database, along with their properties are
          written.
        </p>
      </div>

      <div className="mb-3">
        <h5>EXAMPLE #1</h5>

        <CodeBlock
          language={"powershell"}
          content={"php lion db:capsule table_name"}
        />

        <Alert variant={"warning"}>
          Note: Capsule classes by default are stored in the{" "}
          <Badge bg="warning">database/Class/</Badge> directory, you can change
          the path with the <Badge bg="warning">--path</Badge> option.
        </Alert>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "namespace App\\Class;\r\n\n" +
            "class TableName implements JsonSerializable {\n\n" +
            "\tprivate ?int $id = null;\n" +
            "\tprivate ?string $name = null;\n\n" +
            "\tpublic function __contruct() {}\n\n" +
            "\tpublic function jsonSerialize(): mixed {\n\t\treturn get_object_vars($this);\n\t}\n\n" +
            "\tpublic function getId(): ?int {\n" +
            "\t\treturn $this->id;\n" +
            "\t}\n\n" +
            "\tpublic function setId(?int $id): TableName {\n" +
            "\t\t$this->id = $id;\n" +
            "\t\treturn $this;\n" +
            "\t}\n\n" +
            "\tpublic function getName(): ?string {\n" +
            "\t\treturn $this->name;\n" +
            "\t}\n\n" +
            "\tpublic function setName(?string $name): TableName {\n" +
            "\t\t$this->name = $name;\n" +
            "\t\treturn $this;\n" +
            "\t}\n\n" +
            "}"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h5>EXAMPLE #2</h5>

        <CodeBlock
          language={"powershell"}
          content={"php lion db:all-capsules"}
        />

        <Alert variant={"warning"}>
          Note: Capsule classes by default are stored in the{" "}
          <Badge bg="warning">database/Class/</Badge> directory, you can change
          the path with the <Badge bg="warning">--path</Badge> option,{" "}
          <Badge bg="warning">db:all-capsules</Badge> reads all the tables in
          the database, generating for each table its respective class along
          with its properties and functions.
        </Alert>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "namespace App\\Class;\r\n\n" +
            "class TableName {/* ... */} \n\n" +
            "class TableName2 {/* ... */} \n\n" +
            "class TableName3 {/* ... */} \n\n"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h5>CREATE CUSTOM CAPSULES</h5>

        <p>create custom capsule classes</p>

        <CodeBlock
          language={"powershell"}
          content={"php lion new:capsule ClassName"}
        />
      </div>

      <LinkContainer to="/framework/models">
        <Button variant="light" className="mb-5">
          <FiArrowLeft /> Previous
        </Button>
      </LinkContainer>

      <LinkContainer to="/framework/rules">
        <Button variant="light" className="float-end mb-5">
          Next <FiArrowRight />
        </Button>
      </LinkContainer>
    </>
  );
}

export default Capsules;
