import { Button } from "@/components/ui/button";

export function HomeAtlantic() {
  return (
    <div className="bg-black text-white">
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="mb-12">
        <h1 className="text-6xl font-bold mb-4" style={{ marginTop: '150px' }}>We turn your ideas into software powered by AI</h1>

        </div>
        <div className="space-x-4">
          <Button className="bg-purple-600 text-white">
            Book a meeting
          </Button>
          <Button className="bg-transparent border border-gray-200 text-white dark:border-gray-800">
            Successful cases
          </Button>
        </div>
      </section>
      
    </div>
  )
}



