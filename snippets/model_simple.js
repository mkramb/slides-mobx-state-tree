export const Environments = types.model({
    data: types.array(Environment),
    selected: types.maybe(types.reference(Environment)),
    applications: types.optional(Applications, { data: [] })
})