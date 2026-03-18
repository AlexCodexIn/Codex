import { Avatar, Badge, Button, Card, Input, Layout, Select, Space, Typography } from 'antd';

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const messages = [
  { id: 1, author: 'System', text: 'Привет! Это панель чата.', mine: false },
  { id: 2, author: 'You', text: 'Круто, уже вижу шаблон.', mine: true },
  { id: 3, author: 'System', text: 'Можно подключить реальный API позже.', mine: false }
];

export default function App() {
  return (
    <Layout className="app-layout">
      <Layout>
        <Header className="top-settings-bar">
          <Space size="middle" wrap>
            <Text strong className="settings-label">
              Настройки
            </Text>
            <Select
              defaultValue="ru"
              options={[
                { value: 'ru', label: 'Русский' },
                { value: 'en', label: 'English' }
              ]}
              style={{ width: 130 }}
            />
            <Select
              defaultValue="default"
              options={[
                { value: 'default', label: 'Default theme' },
                { value: 'dark', label: 'Dark theme' }
              ]}
              style={{ width: 160 }}
            />
            <Button>Параметры</Button>
            <Badge count={3}>
              <Button type="text" aria-label="notifications">
                🔔
              </Button>
            </Badge>
            <Avatar>U</Avatar>
          </Space>
        </Header>
        <Content className="workspace-content">
          <Card className="workspace-card">
            <Title level={3}>Рабочее пространство</Title>
            <Text type="secondary">
              Здесь может быть ваша основная область: редактор, холст, дашборд, таблицы и т.д.
            </Text>
          </Card>
        </Content>
      </Layout>

      <Sider width={360} theme="light" className="chat-sider">
        <div className="chat-header">
          <span aria-hidden="true">💬</span>
          <Title level={4} style={{ margin: 0 }}>
            Чат
          </Title>
        </div>

        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message-row ${message.mine ? 'mine' : ''}`}>
              <Card size="small" className="message-bubble">
                <Text strong>{message.author}</Text>
                <br />
                <Text>{message.text}</Text>
              </Card>
            </div>
          ))}
        </div>

        <div className="chat-input-wrap">
          <Input.Search placeholder="Введите сообщение..." enterButton="Отправить" />
        </div>
      </Sider>
    </Layout>
  );
}
