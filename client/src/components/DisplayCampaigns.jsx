import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {loader} from '../assets';
import FundCard from './FundCard';

const DisplayCampaigns = ({title,isLoading,campaigns}) => {
    const navigate=useNavigate();
    const handleNavigate=(campaign)=>{
        navigate(`/campaign-details/${campaign.title}`,{state:campaign})
    }
  return (
    <div>
        <h1 className='font-semibold text-[18px] text-white text-left'>{title} ({campaigns.length})</h1>

        <div className='flex flex-wrap mt-[20px] gap-[26px] '>
            {isLoading && (
                <div className='fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex flex-col items-center justify-center flex-flex '>
                <img src={loader} alt="loader" className='w-[100px] h-[100px] object-contain' />
                </div>
            )}

            {!isLoading && campaigns.length===0 && (
                <div className='fixed inset-0 h-screen flex flex-col items-center justify-center flex-flex '>
                    <p className='font-semibold text-white text-[14px] leading-[30px]'>
                    You have not created any campaign yet
                    </p>
                </div>
            )}

            {!isLoading && campaigns.length>0 && campaigns.map((campaign)=><FundCard
                key={campaign.id}
                {...campaign}
                handleClick={()=>handleNavigate(campaign)}
                />
            )}
        </div>
    </div>
  )
}

export default DisplayCampaigns