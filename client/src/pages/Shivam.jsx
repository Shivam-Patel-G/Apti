import { useState } from 'react';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

const Shivam = () => {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <div className="flex flex-row w-full h-screen">
   
   


      <div className={`w-1/4 ${isSwapped ? 'order-2' : 'order-1'} bg-red-500`}>
  <div class="grid grid-cols-3 gap-2">
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">1</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">2</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">3</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">4</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">5</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">6</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">7</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">8</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">9</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">10</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">11</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">12</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">13</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">14</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">15</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">16</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">17</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">18</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">19</button>
    <button class="bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400">20</button>
    </div>

    <Drawer>
  <DrawerTrigger className="bg-white rounded border p-2" >FINAL  SUBMIT</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>



      </div>

      <div className={`w-3/4 ${isSwapped ? 'order-1' : 'order-2'} bg-blue-500`}>
      <div className="h-full bg-blue-500 w-3/4"> 
            <div class="flex flex-col h-screen">
  <div class="flex-1 p-4 ">
    <div class="question-number text-3xl font-bold mt-8 mb-8">Question 1</div>
    <p class="question-text mb-4 text-2xl">
    A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?</p>
    <RadioGroup defaultValue="option-one" className="text-2xl">
        <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one" className="text-xl">120 meters</Label>
        </div>
        <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two" className="text-xl">180 meters</Label>
        </div>
        <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-one" />
            <Label htmlFor="option-one" className="text-xl">324 meters</Label>
        </div>
        <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-four" id="option-two" />
            <Label htmlFor="option-two" className="text-xl">150 meters</Label>
        </div>
    </RadioGroup>
  </div>



  <div class="flex justify-center items-center p-4 bg-gray-200">
    <button class="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md">Previous</button>
    <button class="bg-yellow-500 text-white px-4 py-2 rounded-md">Mark for Review</button>
    <button class="mr-2 ml-2 bg-green-500 text-white px-4 py-2 rounded-md">Submit & Next</button>
    <button class="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
  </div>
  

  
</div>
           </div>
            
        </div>

      <button className="absolute top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleSwap}>
        Swap Divs
      </button>
    </div>
  );
};

export default Shivam;