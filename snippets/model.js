export const Team = types.model({
    name: types.identifier,
    label: types.string,
    namespace: types.string,
    kind: types.string,
    status: types.enumeration(Object.values(TeamStatus)),
    environments: types.optional(Environments, { data: [] }),
    repositories: types.optional(Repositories, { data: [] }),
    members: types.optional(Members, { data: [] })
})