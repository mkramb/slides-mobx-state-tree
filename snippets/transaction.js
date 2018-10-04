export const Members = types
    .model({
        data: types.array(Member)
    })
    .actions(self => {
        const createMember = flow(function*(values: MemberSnapshotIn) {
            const member = Member.create(values);

            if (member) {
                self.data.push(member);
                yield post(fetch, `/teams/${self.teamName}/members`, values);
            }
        });

        return {
            createMember: decorate(atomic, createMember)
        };
    });