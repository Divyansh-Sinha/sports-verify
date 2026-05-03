import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SubscriptionSection from './SubscriptionSection';

// Utility function to generate current month's start and end dates in DD-MM-YYYY format
const getCurrentMonthDates = () => {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const formatDate = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const yyyy = date.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  return {
    startDate: formatDate(startOfMonth),
    endDate: formatDate(endOfMonth)
  };
};

const profileData = {
  divyansh: {
    name: 'Divyansh Sinha',
    membershipId: 'JRD/FY24/4596',
    email: 'divyansh@yahoo.com',
    category: 'General Citizen',
    dob: '20-08-2001',
    mobile: '8825341544',
    gender: 'M',
    profileImage: '/divyansh.png',
    qrImage: '/qr.png',
    subscriptionData: (() => {
      const dates = getCurrentMonthDates();
      return [
        {
          subscriptionCode: 'T/FY25/12345',
          discipline: 'Badminton (Non AC)',
          startDate: dates.startDate,
          endDate: dates.endDate,
          frequency: 'Monthly'
        },
        {
          subscriptionCode: 'T/FY25/99001',
          discipline: 'Swimming',
          startDate: dates.startDate,
          endDate: dates.endDate,
          frequency: 'Monthly'
        },
      ];
    })()
  },
  shashank: {
    name: 'Shaswat Shashank',
    membershipId: 'JRD/FY24/4576',
    email: 'shaswat.shashank@tatasteel.com',
    category: 'TATA Employee',
    dob: '08-09-2004',
    mobile: '8924350664',
    gender: 'M',
    profileImage: '/shashank.png',
    qrImage: '/shashank-qr.png',
    subscriptionData: (() => {
      const dates = getCurrentMonthDates();
      return [
        {
          subscriptionCode: 'T/FY25/67890',
          discipline: 'Badminton (Non AC)',
          startDate: dates.startDate,
          endDate: dates.endDate,
          frequency: 'Monthly'
        }
      ];
    })()
  },
  utsav: {
    name: 'Udit Utsav',
    membershipId: 'JRD/FY24/5826',
    email: 'utsavudit07@gmail.com',
    category: 'General Citizen',
    dob: '07-09-2000',
    mobile: '8924350664',
    gender: 'M',
    profileImage: '/utsav.jpg',
    qrImage: '/utsav-qr.png',
    subscriptionData: (() => {
      const dates = getCurrentMonthDates();
      return [
        {
          subscriptionCode: 'T/FY25/24680',
          discipline: 'Badminton (Non AC)',
          startDate: dates.startDate,
          endDate: dates.endDate,
          frequency: 'Monthly'
        }
      ];
    })()
  },
  abhijeet: {
    name: 'Abhijeet Kumar',
    membershipId: 'JRD/FY24/8856',
    email: 'abhijeet.kumar@tatasteel.com',
    category: 'TATA Employee',
    dob: '07-09-2000',
    mobile: '9263005329',
    gender: 'M',
    profileImage: '/abhijeet.jpg',
    qrImage: '/abhijeet-qr.png',
    subscriptionData: (() => {
      const dates = getCurrentMonthDates();
      return [
        {
          subscriptionCode: 'T/FY25/13579',
          discipline: 'Badminton (Non AC)',
          startDate: dates.startDate,
          endDate: dates.endDate,
          frequency: 'Monthly'
        }
      ];
    })()
  },
  khushvinder: {
    name: 'Khushvinder Singh',
    membershipId: 'JRD/FY24/13387',
    email: 'khushvinder.singh@tatasteel.com',
    category: 'TATA Employee',
    dob: '07-09-2000',
    mobile: '6391511267',
    gender: 'M',
    profileImage: '/khushvinder.jpg',
    qrImage: '/khushvinder-qr.png',
    subscriptionData: (() => {
      const dates = getCurrentMonthDates();
      return [
        {
          subscriptionCode: 'T/FY25/98765',
          discipline: 'Badminton (Non AC)',
          startDate: dates.startDate,
          endDate: dates.endDate,
          frequency: 'Monthly'
        }
      ];
    })()
  },
  sonal: {
    name: 'Sonal Singh',
    membershipId: 'JRD/FY24/16387',
    email: 'sonal3401@gmail.com',
    category: 'General Citizen',
    dob: '07-09-2000',
    mobile: '6391511267',
    gender: 'M',
    profileImage: '/sonal.jpg',
    qrImage: '/khushvinder-qr.png',
    subscriptionData: (() => {
      const dates = getCurrentMonthDates();
      return [
        {
          subscriptionCode: 'T/FY25/11223',
          discipline: 'Badminton (Non AC)',
          startDate: dates.startDate,
          endDate: dates.endDate,
          frequency: 'Monthly'
        }
      ];
    })()
  },
  reshma: {
    name: 'Reshma Tungana',
    membershipId: 'JRD/FY24/14143',
    email: 'reshma.tungana@tatasteel.com',
    category: 'TATA Employee',
    dob: '20-12-1999',
    mobile: '8864564567',
    gender: 'F',
    profileImage: '/reshma.jpg',
    qrImage: '/khushvinder-qr.png',
    subscriptionData: (() => {
      const dates = getCurrentMonthDates();
      return [
        {
          subscriptionCode: 'T/FY25/33445',
          discipline: 'Badminton (Non AC)',
          startDate: dates.startDate,
          endDate: dates.endDate,
          frequency: 'Monthly'
        }
      ];
    })()
  },
  srushti: {
    name: 'Srushti Bharatkumar Patil',
    membershipId: 'JRD/FY24/15243',
    email: 'srushti.patil@tatasteel.com',
    category: 'TATA Employee',
    dob: '25-09-2001',
    mobile: '8865564577',
    gender: 'F',
    profileImage: '/srushti.jpg',
    qrImage: '/srushti-qr.png',
    subscriptionData: (() => {
      const dates = getCurrentMonthDates();
      return [
        {
          subscriptionCode: 'T/FY25/55667',
          discipline: 'Badminton (Non AC)',
          startDate: dates.startDate,
          endDate: dates.endDate,
          frequency: 'Monthly'
        }
      ];
    })()
  },
  raj: {
    name: 'Deokrrish Singh',
    membershipId: 'JRD/FY24/15468',
    email: 'dkSingh009@gmail.com',
    category: 'General Citizen',
    dob: '09-11-2000',
    mobile: '9145847978',
    gender: 'M',
    profileImage: '/raj.jpg',
    qrImage: '/raj-qr.png',
    subscriptionData: (() => {
      const dates = getCurrentMonthDates();
      return [
        {
          subscriptionCode: 'T/FY25/99001',
          discipline: 'Swimming',
          startDate: dates.startDate,
          endDate: dates.endDate,
          frequency: 'Monthly'
        },
      ];
    })()
  },
  ankit: {
    name: 'Ankit Kumar',
    membershipId: 'JRD/FY24/15468',
    email: 'ankitKumar008@gmail.com',
    category: 'General Citizen',
    dob: '09-11-2000',
    mobile: '9145847978',
    gender: 'M',
    profileImage: '/ankit.jpg',
    qrImage: '/ankit-qr.png',
    subscriptionData: (() => {
      const dates = getCurrentMonthDates();
      return [
        {
          subscriptionCode: 'T/FY25/99001',
          discipline: 'Swimming',
          startDate: dates.startDate,
          endDate: dates.endDate,
          frequency: 'Monthly'
        },
        {
          subscriptionCode: 'T/FY26/12987',
          discipline: 'Steel - Gym',
          startDate: dates.startDate,
          endDate: dates.endDate,
          frequency: 'Monthly'
        },
      ];
    })()
  },
  shashi: {
    name: 'Shashi Sekhar Pandey',
    membershipId: 'JRD/FY24/18975',
    email: 'shashi.pandey@gmail.com',
    category: 'General Citizen',
    dob: '09-11-2000',
    mobile: '9145847978',
    gender: 'M',
    profileImage: '/shashi.jpg',
    qrImage: '/shashi-qr.png',
    subscriptionData: (() => {
      const dates = getCurrentMonthDates();
      return [
        {
          subscriptionCode: 'T/FY25/99001',
          discipline: 'Swimming',
          startDate: dates.startDate,
          endDate: dates.endDate,
          frequency: 'Monthly'
        },
      ];
    })()
  },
  // Add more profiles here
};

const ProfileSection = () => {
  const { name } = useParams();
  const [data, setData] = useState({});
  const [subscriptionData, setSubscriptionData] = useState(null);

  useEffect(() => {
    let profileName = name;
    if (name === undefined)
      profileName = 'divyansh';

    // Get fresh dates for the current month when component mounts or name changes
    const dates = getCurrentMonthDates();

    // Clone the profile data to update the subscription dates
    const profile = profileData[profileName];
    if (profile && profile.subscriptionData) {
      // Update subscription dates with current month's dates
      const updatedSubscriptionData = profile.subscriptionData.map(sub => ({
        ...sub,
        startDate: dates.startDate,
        endDate: dates.endDate
      }));

      // Create a new profile object with updated subscription data
      const updatedProfile = {
        ...profile,
        subscriptionData: updatedSubscriptionData
      };

      setData(updatedProfile);
      setSubscriptionData(updatedSubscriptionData);
    } else {
      setData(profile);
    }
  }, [name]);

  // console.log(data, name);


  return (
    <>
      <div className="bg-white rounded-xl p-2 mt-10 mb-4 shadow relative">
        {/* Blue Header with Name */}
        <div className="bg-primary text-white py-1 text-center rounded-lg font-semibold mb-6 w-[95%] h-[40px] shadow-xl absolute top-[-20px] left-[2.5%]">
          <p className="text-[14px] text-top ">
            {data.name || 'Member'}
          </p>
        </div>

        {/* Name, ID, Image Row */}
        <div className="flex flex-row items-start px-6 mb-4 mt-16">
          <div className="flex flex-col gap-4">
            {/* Name Field */}
            <div>
              <label className="text-sm font-medium text-gray-500 mb-4 block">Name</label>
              <div className="bg-gray-300 text-gray-800 px-4 py-3 rounded-md text-sm font-medium w-[90px] inline-block shadow-inner overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] border border-blue-400">
                {data.name}
              </div>
            </div>

            {/* Row 2: Checkmark */}
            <div className="mb-10 mt-20">
              <div className="flex justify-center items-center w-[60px] h-[60px] border-[5px] border-[#4caf50] rounded-full bg-white">
                <svg className="w-[60px] h-[60px] text-[#4caf50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="4" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Sports Area Selection */}
            <div className="mt-4">
              <label className="text-sm font-medium text-gray-500 mb-3 block">Sports Area</label>
              <button className="bg-gray-300 text-gray-700 px-4 py-3 rounded-md text-sm font-medium shadow-sm hover:bg-gray-400 transition-colors w-[90px] overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] block text-left border border-blue-400">
                Select Sports
              </button>
            </div>

          </div>

          <div className="flex flex-col ml-5 gap-9 w-[14%]">
            {/* Membership ID Field */}
            <div>
              <label className="text-sm font-medium text-gray-500 mb-4 block leading-5">Membership ID.</label>
              <div className="bg-gray-300 text-gray-800 px-4 py-3 rounded-md text-sm font-medium w-[90px] inline-block shadow-inner overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] border border-blue-400">
                {data.membershipId}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 pt-14 mt-[13vh]">
              <button className="bg-[#4caf50] text-white px-6 py-3.5 rounded-lg font-bold text-sm shadow-md w-[100px] hover:bg-green-700 transition-colors">
                ENTRY
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="ml-12 flex flex-col gap-[14.8rem]">
            <img
              className="w-[80px] h-[80px] rounded-xl object-cover shadow-sm border border-gray-100"
              src={data.profileImage}
              alt="Profile"
            />
            <button className="bg-[#d32f2f] text-white px-6 py-3.5  rounded-lg font-bold text-sm w-[100px] shadow-md hover:bg-red-700 transition-colors">
              EXIT
            </button>
          </div>
        </div>
      </div>
      <SubscriptionSection subscriptionData={subscriptionData} currentProfile={name || 'divyansh'} />
    </>
  );
};

export default ProfileSection;