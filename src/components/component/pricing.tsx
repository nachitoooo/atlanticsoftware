/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/JeB3DeX7LcH
 */
import { Button } from "@/components/ui/button"

export function Pricing() {
  return (
    <section className="w-full py-12">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Pricing</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Start with a 14-day free trial. No credit card required.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-4 md:space-y-4 md:p-6 dark:border-gray-850 dark:border-gray-800">
            <h3 className="font-semibold text-xl">Starter</h3>
            <p className="text-3xl font-bold">$9</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Per month, per user</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              All the basics for teams new to project management.
            </p>
            <Button size="sm" variant="outline">
              Choose
            </Button>
          </div>
          <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-4 md:space-y-4 md:p-6 dark:border-gray-850 dark:border-gray-800">
            <h3 className="font-semibold text-xl">Pro</h3>
            <p className="text-3xl font-bold">$29</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Per month, per user</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Advanced features for teams wanting to do more.</p>
            <Button size="sm" variant="outline">
              Choose
            </Button>
          </div>
          <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-4 md:space-y-4 md:p-6 dark:border-gray-850 dark:border-gray-800">
            <h3 className="font-semibold text-xl">Enterprise</h3>
            <p className="text-3xl font-bold">$59</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Per month, per user</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Customizable solutions for your organization.</p>
            <Button size="sm" variant="outline">
              Contact sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
