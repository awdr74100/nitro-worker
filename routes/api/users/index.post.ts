export default eventHandler(async (event) => {
  try {
    const db = useDB(event);
    const schema = useSchema();

    const [user] = await db
      .insert(schema.users)
      .values({ firstName: "Ian", lastName: "Lan" })
      .returning();

    return { ok: true, user };
  } catch (err) {
    console.log(err)
    return { ok: false };
  }
});
