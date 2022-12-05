import { FieldValues, UseFormRegister } from 'react-hook-form'
import { MouseEventHandler } from 'react'


export interface ICard {
    description: string 
    price: number 
    option: string
}

export interface IButton {
    children: React.ReactNode
    onClick?: MouseEventHandler
    disabled?: boolean | undefined
    type?: 'button' | 'submit' | 'reset' | undefined
    size: 'l' | 'm' | 's'
    color: 'home' | 'dashboard'
}

export interface IButtonStyled {
    size: string
    color: string
}

export interface ICardComponent {
    card: ICard
    removeCard: (card: ICard) => void
}

export interface ICardTotalComponent {
    cards: ICard[]
}

export interface IListCardComponent {
    cards: ICard[]
    setFilterCards: any
    children: React.ReactNode
}

export interface Iinput {
    sizeInput: 'm' | 's'
    type?: string
    name: string
    autoComplete?: string
    placeholder?: string
    register: UseFormRegister<FieldValues>
    label?: string
    error?: any
    required: boolean | undefined
}

export interface IinputStyled {
    sizeInput: string
}
