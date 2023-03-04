import React from "react";
import { DatePicker, Form, Row, Select } from "antd";
import { Input } from "antd";
import { rules } from "./../utils/rules";
import { Button } from "antd";
import { IUser } from "../moduls/IUser";
import { IEvent } from "./../moduls/IEvent";

interface EventFormProps {
  guests: IUser[];
}

const EventForm: React.FC<EventFormProps> = (props) => {
  const [event, setEvent] = React.useState<IEvent>({
    author: "",
    date: "",
    description: "",
    guest: "",
  } as IEvent);

  const [eventText, setEventText] = React.useState("");

  return (
    <Form>
      <Form.Item
        label="название события"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
          value={event.description}
        />
      </Form.Item>
      <Form.Item label="дата события" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="выберите гостя" name="guest" rules={[rules.required()]}>
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {props.guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
