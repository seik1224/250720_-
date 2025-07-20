import React from 'react'

const Step02 = () => {
    /*
        [ 제네릭 ]
        타입을 매개변수로 받아 사용하는 방법
        제네릭을 사용하면 코드의 재사용성을 높이고
        다양한 타입에 대해 유연하게 동작하는 코드를 작성
    */
    function getLength<T>(arr : T[]) : number {
        return arr.length;
    }

    const length = getLength<number>([1,2,3,4,5]);
    const length2 = getLength<string>(['a','b','c']);
    const length3 = getLength<object>([{},{},{}]);
    return (
        <div>Step02</div>
    )
}

export default Step02