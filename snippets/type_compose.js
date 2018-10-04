export const TimeStamped = types.model({
    startedTimestamp: types.maybe(DateField),
    completedTimestamp: types.maybe(DateField)
});

export const ActivitySpec = types.compose(
    TimeStamped,
    types.model({
        build: types.string,
        version: types.maybe(types.string),
        steps: types.optional(types.array(ActivityStep), [])
    })
);