export const Team = types.model({
    name: types.identifier,
    members: types.optional(types.array(Member), [])
})
.actions(self => ({
    loadMembers: flow(function*() {
        applySnapshot(
            self.members,
            yield get(fetch, `/teams/${self.name}/members`)
        );
    })
}))