import React from 'react';
import './Organisation.css';
import CreditCards from '../../assets/images/cards.svg';

function Organisation() {
  return (
    <div className='organisation-section'>
        <div className='person-inputs'>
            <form>
                <div className='person-input'>
                    <label>ორგანიზაცია</label>
                    <input type="text" placeholder='ჩაწერეთ ორგანიზაცია'/>
                </div>
                <div className='person-input'>
                    <label>საიდენტიფიკაციო კოდი</label>
                    <input type="number" placeholder='ჩაწერეთ საიდენტიფიკაციო კოდი'/>
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

export default Organisation