types.model({
    repoName: types.identifier,
    branchName: types.string,
    lastSuccess: types.maybe(RepositoryBuild),
    lastFailure: types.maybe(RepositoryBuild)
})
.volatile(self => ({
    parent: getParent<IAnyModelType>(self, 2)
}))
.views(self => ({
    get teamName() {
        return self.parent.teamName;
    }
))