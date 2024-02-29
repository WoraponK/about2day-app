import React from 'react'
import Image from 'next/image';

const checkSize = (size?: number) => {
    return size ?? 35;
}

const checkType = (type: string, size: number) => {
    const iconSize = checkSize(size);

    switch (type) {
        case 'in-foods':
            return (
                <Image
                    src="/images/a2d/income-foods.svg"
                    alt="in-foods"
                    width={iconSize}
                    height={iconSize}
                />
            );
        case 'in-tools':
            return (
                <Image
                    src="/images/a2d/income-tools.svg"
                    alt="in-tools"
                    width={iconSize}
                    height={iconSize}
                />
            );
        case 'in-gaming':
            return (
                <Image
                    src="/images/a2d/income-gaming.svg"
                    alt="in-gaming"
                    width={iconSize}
                    height={iconSize}
                />
            );
        case 'in-shopping':
            return (
                <Image
                    src="/images/a2d/income-shopping.svg"
                    alt="in-shopping"
                    width={iconSize}
                    height={iconSize}
                />
            );
        case 'in-phone':
            return (
                <Image
                    src="/images/a2d/income-phone.svg"
                    alt="in-phone"
                    width={iconSize}
                    height={iconSize}
                />
            );
        case 'in-house':
            return (
                <Image
                    src="/images/a2d/income-house.svg"
                    alt="in-house"
                    width={iconSize}
                    height={iconSize}
                />
            );
        case 'ex-extra':
            return (
                <Image
                    src="/images/a2d/expenses-extra.svg"
                    alt="ex-extra"
                    width={iconSize}
                    height={iconSize}
                />
            );
        case 'ex-people':
            return (
                <Image
                    src="/images/a2d/expenses-people.svg"
                    alt="ex-people"
                    width={iconSize}
                    height={iconSize}
                />
            );
        case 'ex-salary':
            return (
                <Image
                    src="/images/a2d/expenses-salary.svg"
                    alt="ex-salary"
                    width={iconSize}
                    height={iconSize}
                />
            );
        case 'in-logo':
            return (
                <Image
                    src="/images/a2d/income-logo.svg"
                    alt="in-logo"
                    width={iconSize}
                    height={iconSize}
                />
            );
        case 'ex-logo':
            return (
                <Image
                    src="/images/a2d/expenses-logo.svg"
                    alt="ex-logo"
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