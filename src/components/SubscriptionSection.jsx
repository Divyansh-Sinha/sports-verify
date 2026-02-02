import React, { useState, useEffect } from 'react';

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

// Profile-specific subscription data as arrays - in a real app this would come from a shared data store
const profileSubscriptions = {
  divyansh: (() => {
    const dates = getCurrentMonthDates();
    return [
      {
        subscriptionCode: 'T/FY25/12345',
        discipline: 'Badminton (Non AC)',
        startDate: dates.startDate,
        endDate: dates.endDate,
        frequency: 'Monthly'
      }
    ];
  })(),
  shashank: (() => {
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
  })(),
  utsav: (() => {
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
  })(),
  abhijeet: (() => {
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
  })(),
  khushvinder: (() => {
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
  })(),
  sonal: (() => {
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
  })(),
  reshma: (() => {
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
  })(),
  srushti: (() => {
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
  })(),
  raj: (() => {
    const dates = getCurrentMonthDates();
    return [
      {
        subscriptionCode: 'T/FY25/77889',
        discipline: 'Badminton (Non AC)',
        startDate: dates.startDate,
        endDate: dates.endDate,
        frequency: 'Monthly'
      }
    ];
  })(),
  ankit: (() => {
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
        subscriptionCode: 'T/FY25/99002',
        discipline: 'Badminton (Non AC)',
        startDate: dates.startDate,
        endDate: dates.endDate,
        frequency: 'Monthly'
      }
    ];
  })()
};

const SubscriptionSection = ({ subscriptionData, currentProfile }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    // Get fresh dates for the current month when component mounts or props change
    const dates = getCurrentMonthDates();

    // First, check if explicit subscriptionData is provided as props (can be array or single object)
    if (subscriptionData) {
      if (Array.isArray(subscriptionData)) {
        // Update subscription dates with current month's dates
        const updatedSubscriptionData = subscriptionData.map(sub => ({
          ...sub,
          startDate: dates.startDate,
          endDate: dates.endDate
        }));
        setSubscriptions(updatedSubscriptionData);
      } else {
        // If it's a single object, convert to an array
        const updatedSubscriptionData = [{
          ...subscriptionData,
          startDate: dates.startDate,
          endDate: dates.endDate
        }];
        setSubscriptions(updatedSubscriptionData);
      }
    }
    // Then check if currentProfile is provided to get profile-specific data
    else if (currentProfile && profileSubscriptions[currentProfile]) {
      // Update subscription dates with current month's dates
      const profileSubs = profileSubscriptions[currentProfile];
      const updatedSubscriptionData = profileSubs.map(sub => ({
        ...sub,
        startDate: dates.startDate,
        endDate: dates.endDate
      }));
      // Set the subscription data for this profile (already in array format)
      setSubscriptions(updatedSubscriptionData);
    }
    // Finally, generate default values if no specific data is provided (for backward compatibility)
    else {
      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

      const formatDate = (date) => {
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
        return `${dd}-${mm}-${yyyy}`;
      };

      // Generate fiscal code and reuse monthly random number from localStorage
      const fiscalYear = 'FY' + String(now.getFullYear()).slice(-2);
      const monthKey = `subscriptionCode-${now.getFullYear()}-${now.getMonth()}`;
      let storedCode = localStorage.getItem(monthKey);
      if (!storedCode) {
        storedCode = Math.floor(10000 + Math.random() * 90000).toString();
        localStorage.setItem(monthKey, storedCode);
      }

      // Set default single subscription
      setSubscriptions([{
        subscriptionCode: `T/${fiscalYear}/${storedCode}`,
        discipline: 'Badminton ( Non AC )',
        startDate: formatDate(startOfMonth),
        endDate: formatDate(endOfMonth),
        frequency: 'Monthly'
      }]);
    }
  }, [subscriptionData, currentProfile]);

  return (
    <div className="bg-white rounded-xl p-4 mb-8 shadow h-[30vh] relative mt-20">
      {/* Blue Header */}
      {/* Blue Header */}
      <div className="bg-primary text-white py-2 text-center rounded-lg font-semibold text-[1.3rem] mb-6 w-[94%] shadow-xl absolute top-[20px] left-[3%]">
        Active Subscriptions
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {subscriptions.map((sub, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg max-w-[95%] flex-[1_1_300px] text-center border border-gray-200">
            <h3 className="text-gray-900 font-semibold text-2xl mb-4">Subscription</h3>

            <div className="space-y-4">
              <p className="text-gray-800 font-medium text-xl">
                Discipline: {sub.discipline}
              </p>
              <p className="text-gray-800 font-medium text-xl">
                Start Date: {sub.startDate}
              </p>
              <p className="text-gray-800 font-medium text-xl">
                End Date: {sub.endDate}
              </p>
              <p className="text-gray-800 font-medium text-xl">
                Frequency: {sub.frequency}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionSection;