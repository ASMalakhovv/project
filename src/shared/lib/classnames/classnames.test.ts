import {classNames} from "shared/lib/classnames/classnames";

describe('classnames', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
})
