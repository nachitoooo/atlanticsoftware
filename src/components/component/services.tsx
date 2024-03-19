export default function Services() {
  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col items-center p-6 border rounded-lg space-y-4">
        <FileQuestionIcon className="text-2xl" />
        <div className="text-center">
          <h3 className="text-lg font-semibold">Software development for Startups</h3>
          <p className="text-sm text-gray-600">
            Empower your startup&apos;s journey with custom software development tailored to fuel growth and innovation
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center p-6 border rounded-lg space-y-4">
        <ShoppingCartIcon className="text-2xl" />
        <div className="text-center">
          <h3 className="text-lg font-semibold">E-commerce</h3>
          <p className="text-sm text-gray-600">
            Our e-commerce solutions simplify transactions, providing a fantastic shopping experience for customers
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center p-6 border rounded-lg space-y-4">
        <BuildingIcon className="text-2xl" />
        <div className="text-center">
          <h3 className="text-lg font-semibold">Software development for companies</h3>
          <p className="text-sm text-gray-600">
            Elevate your company&apos;s potential through software solutions, finely tuned to ensure business success
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center p-6 border rounded-lg space-y-4">
        <PlaneLandingIcon className="text-2xl" />
        <div className="text-center">
          <h3 className="text-lg font-semibold">Landing page</h3>
          <p className="text-sm text-gray-600">
            Create a lasting first impression. Our landing pages are strategically designed to convert visitors into
            customers
          </p>
        </div>
      </div>
    </div>
  );
}

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function FileQuestionIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function PlaneLandingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 22h20" />
      <path d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
