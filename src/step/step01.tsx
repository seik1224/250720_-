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

    // union type : 여러타입 중 하나를 가질 수 있는 변수를 정의할 때 사용
    const nameOrAge : string | number = '짱구';
    const arr : (number | string)[]= [1, '2', 3];
    const obj : {data : number | string} = { data:'123' }

    // Literal type : 특정 값만 가질 수 있는 변수를 정의할 때 사용
    const direction : 'left' | 'right' = 'left';

    // any type : 아무 자료나 집어넣을 수 있는 타입
    let age2 : any = '짱구';
    age2 = 5;

    // unkwon type : 타입을 모를때 사용, 사용전 타입체크 필요
    let age3 : unknown = '짱구';
    age3= 11;

    if(typeof age3 === 'number'){
        age3 = age3 + 1 ;
    }

    // Type Assertion : 타입을 확실하게 지정할 때 사용
    const someVal :unknown ='HELLO';
    const strLength : number = (someVal as string).length;

    // Type Narrowing : 타입을 좁혀나가는 것
    function printAge(age:number|string){
        // string | number
        if(typeof age === 'number'){
            // number
            console.log(age);
        }
    }
    printAge(11);

    return (
        <div>{numbers}</div>
    )
}

export default Step01