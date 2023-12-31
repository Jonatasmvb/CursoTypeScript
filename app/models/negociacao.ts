export class Negociacao{
    constructor(private _data: Date,private _quantidade: number,private _valor:number){
    }

    get data(): Date{
        return this._data
    }
    get quantidade(): Number{
        return this._quantidade
    }
    get valor(): Number{
        return this._valor
    }

    get volume(): Number{
        return this._quantidade * this._valor
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
            const exp = /-/g;
            const date = new Date(dataString.replace(exp, ','));
            const quantidade = parseInt(quantidadeString)
            const valor = parseFloat(valorString)
            return new Negociacao(date,quantidade,valor);
        }
}