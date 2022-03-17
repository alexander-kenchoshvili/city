import React from 'react';
import './PhisicalPerson.css';
import CreditCards from '../../assets/images/cards.svg';

function PhisicalPerson() {
  return (
    <div className='person-donation' >
        <div className='person-inputs'>
            <form>
                <div className='person-input'>
                    <label>სახელი</label>
                    <input type="text" placeholder='ჩაწერეთ სახელი'/>
                </div>
                <div className='person-input'>
                    <label>გვარი</label>
                    <input type="text" placeholder='ჩაწერეთ გვარი'/>
                </div>
                <div className='person-input'>
                    <label>პირადი ნომერი</label>
                    <input type="number" placeholder='ჩაწერეთ პირადი ნომერი'/>
                </div>
                <div className='person-input'>
                    <label>ტელეფონი</label>
                    <input type="text" placeholder='+995'/>
                </div>
                <div className='person-input'>
                    <label>ელ-ფოსტა</label>
                    <input type="text" placeholder='ჩაწერეთ ელ-ფოსტა'/>
                </div>
                <div className='credit-cards'>
                        <img src={CreditCards} alt="" />
                        <h4>გადარიცხვის მინიმალური თანხა: <span>1₾</span> </h4>
                </div>
                <div className='transfer-btn'>
                    <button>გადარიცხვა</button>
                </div>
            </form>
        </div>
        <div className='inner-container'>
            <div className='donors'>
                <div className="donor-header">დონორები</div>
                <div className='donor-list'>
                    <div className='donor-title'>
                        <h2>დონორი</h2>
                        <div className='right-title'> 
                            <h2 className='donor-date' >თარიღი</h2>
                            <h2 className='donor-money' >თანხა</h2>
                        </div>
                    </div>
                    <div className='donor-members'>
                        <span className='donor-name'>რატი ბერულავა</span>
                        <div className='donor-info'>
                            <span className='donor-date-info' >22.02.2022</span>
                            <span className='donor-money-info' >75₾</span>
                        </div> 
                    </div>
                    <div className='donor-members'>
                        <span className='donor-name'>რატი ბერულავა</span>
                        <div className='donor-info'>
                            <span className='donor-date-info' >22.02.2022</span>
                            <span className='donor-money-info' >75₾</span>
                        </div> 
                    </div>
                    <div className='donor-members'>
                        <span className='donor-name'>რატი ბერულავა</span>
                        <div className='donor-info'>
                            <span className='donor-date-info' >22.02.2022</span>
                            <span className='donor-money-info' >75₾</span>
                        </div> 
                    </div>
                    <div className='donor-members'>
                        <span className='donor-name'>რატი ბერულავა</span>
                        <div className='donor-info'>
                            <span className='donor-date-info' >22.02.2022</span>
                            <span className='donor-money-info' >75₾</span>
                        </div> 
                    </div>
                    <div className='donor-members'>
                        <span className='donor-name'>რატი ბერულავა</span>
                        <div className='donor-info'>
                            <span className='donor-date-info' >22.02.2022</span>
                            <span className='donor-money-info' >75₾</span>
                        </div> 
                    </div>
                    <div className='donor-members'>
                        <span className='donor-name'>რატი ბერულავა</span>
                        <div className='donor-info'>
                            <span className='donor-date-info' >22.02.2022</span>
                            <span className='donor-money-info' >75₾</span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PhisicalPerson