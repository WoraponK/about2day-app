import React from 'react'
import Image from 'next/image';

const checkSize = (size?: number) => {
    return size ?? 35;
}

const checkType = (type: string, size: number) => {
    const iconSize = checkSize(size);

    switch (type) {
        case 'ex-foods':
            return (
                <Image
                    src="/images/a2d/expenses-foods.svg"
                    alt="ex-foods"
                    width={iconSize}
                    height={iconSize}
                />
            );
        case 'ex-tools':
            return (
                <Image
                    src="/images/a2d/expenses-tools.svg"
                    alt="ex-tools"
                    width={iconSize}
                    height={iconSize}
                />

            );
        case 'ex-gaming':
            return (
                <Image
                    src="/images/a2d/expenses-gaming.svg"
                    alt="ex-gaming"
                    width={iconSize}
                    height={iconSize}
                />

            );
        case 'ex-shopping':
            return (
                <Image
                    src="/images/a2d/expenses-shopping.svg"
                    alt="ex-shopping"
                    width={iconSize}
                    height={iconSize}
                />

            );
        case 'ex-phone':
            return (
                <Image
                    src="/images/a2d/expenses-phone.svg"
                    alt="ex-phone"
                    width={iconSize}
                    height={iconSize}
                />

            );
        case 'ex-house':
            return (
                <Image
                    src="/images/a2d/expenses-house.svg"
                    alt="ex-house"
                    width={iconSize}
                    height={iconSize}
                />

            );
        case 'in-extra':
            return (
                <Image
                    src="/images/a2d/income-extra.svg"
                    alt="in-extra"
                    width={iconSize}
                    height={iconSize}
                />

            );
        case 'in-people':
            return (
                <Image
                    src="/images/a2d/income-people.svg"
                    alt="in-people"
                    width={iconSize}
                    height={iconSize}
                />

            );
        case 'in-salary':
            return (
                <Image
                    src="/images/a2d/income-salary.svg"
                    alt="in-salary"
                    width={iconSize}
                    height={iconSize}
                />

            );
        case 'in-logo':
            return (
                <Image
                    src="/images/a2d/expenses-logo.svg"
                    alt="ex-logo"
                    width={iconSize}
                    height={iconSize}
                />

            );
        case 'ex-logo':
            return (
                <Image
                    src="/images/a2d/income-logo.svg"
                    alt="in-logo"
                    width={iconSize}
                    height={iconSize}
                />

            );
        default:
            return null;
    }
}

function A2dIcon({
    type,
    size
}: {
    type: string;
    size: number;
}) {
    return checkType(type, size)
}

export default A2dIcon