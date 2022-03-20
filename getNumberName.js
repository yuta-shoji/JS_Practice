function getNumberName(num){
    const ty = ['ten' ,'twenty' ,'thirty' ,'forty' ,'fifty' ,'sixty' ,'seventy' ,'eighty' ,'ninety'];
    const teen = ['eleven' ,'twelve' ,'thirteen' ,'fourteen' ,'fifteen' ,'sixteen' ,'seventeen' ,'eighteen' ,'nineteen'];
    const underTen ['zero' ,'one' ,'two' ,'three' ,'four' ,'five' ,'six' ,'seven' ,'eight' ,'nine'];
    const thousand = String(num).charAt(String(num).length - 4);
    const hundred = String(num).charAt(String(num).length - 3);
    const tenth = String(num).charAt(String(num).length - 2);
    const first = String(num).charAt(String(num).length - 1);
    let result = "";
    if (String(num).length >= 4){
        result += `${underTen[thousand]} thousand`;
        if (String(num) % 1000 === 0){
            return result.trim();
        }
    }
    if (String(num).length >= 3 && Number(hundred) !== 0){
        result += `${underTen[hundred]} hundred `;
        if (String(num) % 100 === 0){
            return result.trim();
        }
    }
    if (String(num).length >= 2){
        if (String(num) % 10 === 0){
            result += `${ty[tenth - 1]}`;
            return result;
        } else if (tenth + first > 10 && tenth + first < 20){
            result += `${teen[first - 1]}`;
            return result;
        } else if (tenth + first > 20){
            result += `${ty[tenth - 1]}`;
        }
    }
    return result += `${underTen[first]}`;
}
