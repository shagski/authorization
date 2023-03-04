import { Row, Button, Layout, Modal } from "antd";
import React from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "./../hooks/useActions";
import { useTypeSelector } from "./../hooks/useTypeSelector";

const Main: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { fetchGuests } = useActions();
  const { guests } = useTypeSelector((state) => state.event);

  React.useEffect(() => {
    fetchGuests();
  }, []);

  return (
    <Layout className="App">
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
      </Row>
      <Modal
        title="добавить событие"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} />
      </Modal>
    </Layout>
  );
};

export default Main;
