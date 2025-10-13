export function cube(x: number):number
{
    return x ** 3;
}

export function cubes (xs: number[]): number[]
{
    return xs.map(cube)
}

