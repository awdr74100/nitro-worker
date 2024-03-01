export default eventHandler(async (event) => {
  try {
    const db = useDB(event);
    const schema = useSchema();

    const users = await db.select().from(schema.users);

    return { ok: true, users };
  } catch {
    return { ok: false };
  }
});
