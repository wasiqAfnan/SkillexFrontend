import React, { useState } from "react";
import { X, ShoppingCart, CreditCard, Check, Star } from "lucide-react";

const EnrollModal = ({ course, isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const plans = [
    {
      id: 'course',
      title: 'Buy Course',
      price: course?.price || 89.99,
      description: 'One-time payment for lifetime access',
      features: [
        'Lifetime access to course',
        'All course materials',
        'Certificate of completion',
        'Community access'
      ],
      icon: ShoppingCart,
      recommended: false
    },
    {
      id: 'subscription',
      title: 'Skillex Pro',
      price: 29.99,
      period: '/month',
      description: 'Access to all courses and premium features',
      features: [
        'Access to all courses',
        'New courses added monthly',
        'Priority support',
        'Advanced certificates',
        'Exclusive webinars'
      ],
      icon: CreditCard,
      recommended: true
    }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setCurrentStep(2);
  };

  const handleConfirm = async () => {
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      
      onClose();
      setCurrentStep(1);
      setSelectedPlan(null);
    }, 2000);
  };

  const handleClose = () => {
    onClose();
    setCurrentStep(1);
    setSelectedPlan(null);
  };

  if (!isOpen || !course) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-2xl">
            {currentStep === 1 ? 'Choose Your Learning Plan' : 'Confirm Enrollment'}
          </h3>
          <button 
            onClick={handleClose}
            className="btn btn-ghost btn-circle"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {currentStep === 1 && (
          <div className="space-y-6">
            {/* Course Info */}
            <div className="flex items-center space-x-4 p-4 bg-base-200 rounded-lg">
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-semibold">{course.title}</h4>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`star ${i < Math.floor(course.rating) ? '' : 'empty'}`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-base-content/70">
                    {course.rating} ({course.totalRatings} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Plans */}
            <div className="grid gap-4 md:grid-cols-2">
              {plans.map((plan) => {
                const IconComponent = plan.icon;
                return (
                  <div
                    key={plan.id}
                    onClick={() => handlePlanSelect(plan)}
                    className={`card bg-base-100 border-2 cursor-pointer transition-all hover:shadow-lg
                      ${plan.recommended ? 'border-primary shadow-lg' : 'border-base-300'}
                    `}
                  >
                    {plan.recommended && (
                      <div className="badge badge-primary absolute -top-2 left-1/2 transform -translate-x-1/2">
                        Recommended
                      </div>
                    )}
                    
                    <div className="card-body">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-6 w-6 text-primary" />
                        <h4 className="card-title text-lg">{plan.title}</h4>
                      </div>
                      
                      <div className="flex items-baseline space-x-1">
                        <span className="text-3xl font-bold text-primary">
                          ${plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-base-content/70">{plan.period}</span>
                        )}
                      </div>
                      
                      <p className="text-sm text-base-content/70 mb-4">
                        {plan.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm">
                            <Check className="h-4 w-4 text-success flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <p className="text-sm text-base-content/70">
                30-day money-back guarantee • Secure payment
              </p>
            </div>
          </div>
        )}

        {currentStep === 2 && selectedPlan && (
          <div className="space-y-6">
            {/* Selected Plan Summary */}
            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">Order Summary</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Course: {course.title}</span>
                    <span className="font-semibold">${course.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Plan: {selectedPlan.title}</span>
                    <span className="font-semibold">
                      ${selectedPlan.price}{selectedPlan.period || ''}
                    </span>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">
                      ${selectedPlan.price}{selectedPlan.period || ''}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="alert alert-info">
              <Check className="h-5 w-5" />
              <span>30-day money-back guarantee included</span>
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <button 
                onClick={() => setCurrentStep(1)}
                className="btn btn-outline flex-1"
                disabled={isProcessing}
              >
                Back
              </button>
              <button 
                onClick={handleConfirm}
                disabled={isProcessing}
                className="btn btn-primary flex-1 btn-gradient"
              >
                {isProcessing ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Processing...
                  </>
                ) : (
                  'Confirm Enrollment'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="modal-backdrop" onClick={handleClose}></div>
    </div>
  );
};

export default EnrollModal;