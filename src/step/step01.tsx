import React from 'react'

const Step01 = () => {
    const name : string = '짱구';
    const age : number = 5;
    const isSt : boolean = true;
    const empty : null = null;
    const notAs : undefined = undefined;

    /** Array : 이런 주석도 있음 */
    const numbers : number[] = [1,2,3,4];
    const friends : Array<number> = [1,2,3,4];

    /** Object */
    const person : { name : string, age: number } = {
        name:'짱구',
        age : 5,
    }

    /**
     * Function에서는 이렇게 작동
     * @param fname 이름을 받아옴
     * @returns 인사말
     */
    function greet(fname : string) : string {
        console.log(fname);
        return `안녕! ${fname}`;
    }

    greet('짱구');

    /*
        [ 함수 타입 ]
        - return이 없어야 한다면 void
        function myFunc(x:number) : void {}
    
        - 파라미터가 옵션일 경우
        function myFunc(x?:number){}
    */

    return (
        <div>{numbers}</div>
    )
}

export default Step01