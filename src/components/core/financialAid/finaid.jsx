import React, { useState } from 'react';

const FinancialAidForm = () => {
  const [formStep, setFormStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target);
    
    // Log form data (for demonstration purposes)
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setFormStep(3); // Success step
    }, 1500);
  };

  const renderFormStep = () => {
    switch (formStep) {
      case 0:
        return (
          <>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Country of Residence</label>
                <select
                  id="country"
                  name="country"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="IN">India</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setFormStep(1)}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
              >
                Next
              </button>
            </div>
          </>
        );
      
      case 1:
        return (
          <>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Financial Information</h2>
              
              <div>
                <label htmlFor="employment" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Current Employment Status</label>
                <select
                  id="employment"
                  name="employment"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select status</option>
                  <option value="employed">Employed full-time</option>
                  <option value="part-time">Employed part-time</option>
                  <option value="self-employed">Self-employed</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="student">Student</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="income" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Annual Income (USD)</label>
                <input
                  type="number"
                  id="income"
                  name="income"
                  min="0"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="dependents" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Number of Dependents</label>
                <input
                  type="number"
                  id="dependents"
                  name="dependents"
                  min="0"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="aidReason" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Reason for Financial Aid Request</label>
                <select
                  id="aidReason"
                  name="aidReason"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a reason</option>
                  <option value="unemployed">Currently unemployed</option>
                  <option value="student">Full-time student</option>
                  <option value="low-income">Low income</option>
                  <option value="medical">Medical expenses</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={() => setFormStep(0)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:text-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setFormStep(2)}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
              >
                Next
              </button>
            </div>
          </>
        );
        
      case 2:
        return (
          <>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Statement of Need</h2>
              
              <div>
                <label htmlFor="statement" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Please explain why you need financial aid for this course (min 50 characters)
                </label>
                <textarea
                  id="statement"
                  name="statement"
                  rows="6"
                  required
                  minLength="50"
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please be specific about your financial situation and why you cannot afford the course fee..."
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="goalStatement" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  How will completing this course help you achieve your career goals? (min 50 characters)
                </label>
                <textarea
                  id="goalStatement"
                  name="goalStatement"
                  rows="6"
                  required
                  minLength="50"
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Explain how this course will help your career development or educational journey..."
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 bg-white dark:bg-gray-700"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agree" className="font-medium text-gray-700 dark:text-gray-300">
                    I certify that the information provided is accurate and complete
                  </label>
                  <p className="text-gray-500 dark:text-gray-400">I understand that providing false information may result in the rejection of my application</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={() => setFormStep(1)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:text-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 text-richblack-500 font-medium rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : "Submit Application"}
              </button>
            </div>
          </>
        );
        
      case 3:
        return (
          <div className="text-center py-8">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900">
              <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-3 text-xl font-medium text-gray-800 dark:text-gray-100">Application Submitted</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Your financial aid application has been received. We will review your application and notify you of the decision within 5-7 business days.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-200 dark:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-richblack-100 dark:text-gray-100">
          Financial Aid Application
        </h2>
        <p className="mt-2 text-center text-sm text-richblack-300 dark:text-gray-300">
          Apply for financial assistance to access our premium courses
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {formStep < 3 && (
            <div className="mb-8">
              <div className="relative">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-600">
                  <div
                    style={{ width: `${(formStep + 1) * 33.33}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-300"
                  ></div>
                </div>
                <div className="flex justify-between">
                  <div className={`text-xs font-medium ${formStep >= 0 ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'}`}>
                    Personal Info
                  </div>
                  <div className={`text-xs font-medium ${formStep >= 1 ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'}`}>
                    Financial Details
                  </div>
                  <div className={`text-xs font-medium ${formStep >= 2 ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'}`}>
                    Statement
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            {renderFormStep()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FinancialAidForm;
