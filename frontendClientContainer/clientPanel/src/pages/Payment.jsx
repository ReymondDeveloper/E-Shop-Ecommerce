import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Setting from './Setting';
import '../pagesStyle/Payment.css';
import PaymentCard from './PaymentCard';
import PaymentBank from './PaymentBank';
const Payment = () => {
  
//   const [cards, setCards] = useState([{ name: 'John Doe', cardNumber: '**** **** **** 1234' }]);
//   const [banks, setBanks] = useState([{ name: 'John Doe', bankName: 'Bank of Example' }]);

    const [cards, setCards] = useState([]);
    const [banks, setBanks] = useState([]);

    const [openPaymentCard,SetOpenPaymentCard] = useState(false);
    const [openPaymentBank,SetOpenPaymentBank] = useState(false);

    const setOpenCard = () => SetOpenPaymentCard(true);
    const setCloseCard = () => SetOpenPaymentCard(false);

    const setOpenBank = () => SetOpenPaymentBank(true);
    const setCloseBank = () => SetOpenPaymentBank(false);

    return (
    <>
        <Navbar/>
        <div className='paymentMain d-flex'>
            <Setting/>
            <div className='paymentMethodsContainer container-fluid p-0'>
                <div className='paymentComponent'>
                    <div className='paymentHeader shadow'>
                        <p className='paymentHeaderTle'>Payment Methods</p>
                    </div>
                    <div className='paymentBody'>
                        <div className='pytBodyComponent'>
                            <p className='pytBodyTitle'><i className="IconCard bi-credit-card"></i> Credit / Debit Card</p>
                            <p><i className="pytIconAdd bi-pencil-square" onClick={setOpenCard}></i></p>
                        </div>
                            {cards.length > 0 ? (
                                cards.map((card, index) => (
                                <div key={index} className='pytBodyComponentFooter'>
                                    <p className='pytBodyPhrag'>{card.name} - {card.cardNumber}</p>
                                    <p><i className="IconCheck bi-check-circle"></i></p>
                                    <button className='btnPaymentDtl'>Delete</button>
                                </div>
                            ))
                            ) : (
                                <div className='pytBodyComponentFooterMsg'>
                                    <p className='noCardsMessage'>You don't have cards yet.</p>
                                </div>
                            )}
                                </div>
                    <div className='paymentFooter'>
                        <div className='pytFooterHeaderComponent'>
                            <p className='pytFooterTitle'><i className="IconBank bi-bank"></i> Bank</p>
                            <p><i className="pytIconAdd bi-pencil-square" onClick={setOpenBank}></i></p>
                        </div>
                            {banks.length > 0 ? (
                                banks.map((bank, index) => (
                                <div key={index} className='pytFooterComponent'>
                                    <p className='pytFooterPhrg'>{bank.name} - {bank.bankName}</p>
                                    <p><i className="IconCheck bi-check-circle"></i></p>
                                    <button className='btnPaymentDtl'>Delete</button>
                                </div>
                                ))
                            ) : (
                                <div className='pytFooterComponentMsg'> 
                                <p className='noBanksMessage'>You don't have bank accounts yet.</p>
                                </div>
                            )}
                    </div>
                </div>
                {openPaymentCard && (<PaymentCard handleCloseCard={setCloseCard}/> )}
                {openPaymentBank && (<PaymentBank handleClose={setCloseBank}/> )}
            </div>
        </div>
    </>
    )
}

export default Payment