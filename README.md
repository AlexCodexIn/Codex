# Ant Workspace Template

Шаблон интерфейса на **React + Vite + TypeScript + Ant Design**.

## Что внутри

- верхняя панель с настройками;
- правая панель чата;
- центральное рабочее пространство.

## Структура

- `src/App.tsx` — основной layout страницы;
- `src/main.tsx` — точка входа и `ConfigProvider`;
- `src/styles.css` — стили шаблона;
- `package.json` — скрипты и зависимости.

## Запуск локально

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Troubleshooting

Если `npm install` падает с `403 Forbidden`, это обычно означает ограничение доступа к npm registry в текущем окружении.
В таком случае проверьте сетевую политику/прокси или используйте доступный внутренний npm mirror.
