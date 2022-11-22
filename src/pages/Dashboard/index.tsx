import { Container, HeaderStyled, Content } from './style'
import { useLocalStorage } from '../../components/Hook'
import { CardTotal } from '../../components/CardTotal'
import { yupResolver } from '@hookform/resolvers/yup'
import title from '../../assets/Nu-Kenzie-black.png'
import { ListCard } from '../../components/ListCard'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useHistory } from 'react-router-dom'
import { Card } from '../../components/Card'
import { useForm } from 'react-hook-form'
import { ICard } from '../../interfaces'
import { useState } from 'react'
import * as yup from 'yup'


const Dashboard = () => {

    const history = useHistory()

    const [ cards, setCards ] = useLocalStorage('Nu Kenzie: cards', [])

    const [ filterCards, setFilterCards ] = useLocalStorage('Nu Kenzie: filter', [])

    const [ option, setOption ] = useState<string>('Entry')

    const addCard = (newCard: ICard) => {
  
        const copyNewCard = { ...newCard }
        
        if(newCard.option === 'Expenses') {

            +copyNewCard.price

            copyNewCard.price = -copyNewCard.price
        }
    
        setCards([...cards, copyNewCard])
    }
  
    const removeCard = (card: ICard) => {
    
        setCards(cards.filter((x: ICard) => x !== card))
    
        setFilterCards(filterCards.filter((x: ICard) => x !== card))
    }

    const schema = yup.object().shape({
    
        description: yup
            .string()
            .required('Required description'),
        
        price: yup
            .string()
            .required('')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSubmitFunc = (data: any) => {

        const { description, price } = data

        const newData = { description, price, option }

        addCard(newData)
    }

    return (
        <>
            <HeaderStyled>
                <div>
                    <img src={ title } alt="Nu Kenzie" />
                    
                    <Button
                    size="s"
                    color="dashboard"
                    onClick={ () => history.push('/', { message: 'You are home' } ) }
                    >Start</Button>
                </div>
            </HeaderStyled>
            
            <Container>
                
                <div className="divForm">
                    <Content onSubmit={ handleSubmit(onSubmitFunc) }>
                        <div>
                            <Input
                            sizeInput="m"
                            type="text"
                            name="description"
                            autoComplete="off"
                            placeholder="Enter your description here"
                            register={ register }
                            label="Description"
                            error={ errors.description?.message }
                            />

                            <span>Ex: Buying clothes</span>
                        </div>

                        <section>
                            <Input
                            sizeInput="s"
                            type="text"
                            name="price"
                            autoComplete="off"
                            placeholder="US$"
                            register={ register }
                            label="Value"
                            error={ errors.price?.message }
                            />

                            <div>
                                <label>Type of value</label>

                                <select name="options" onChange={ e => setOption(e.target.value) }>
                                    <option>Entry</option>
                                    <option>Expenses</option>
                                </select>
                            </div>
                        </section>

                        <Button type="submit" size="l" color="home">Insert value</Button>
                    </Content>

                    { cards.length > 0 && <CardTotal cards={ filterCards.length > 0 ? filterCards : cards } /> }
                </div>

                <ListCard cards={ cards } setFilterCards={ setFilterCards } children={

                    filterCards.length > 0 ? (
                        
                        filterCards.map((card: ICard, i: number) => 
                        <Card 
                        key={ i } 
                        card={ card } 
                        removeCard={ removeCard } 
                        />)
                        
                    ) : (

                        cards.map((card: ICard, i: number) => 
                        <Card key={ i } 
                        card={ card } 
                        removeCard={ removeCard } 
                        />)
                    )
                } />
            </Container>
        </>
    )
}

export { Dashboard }
