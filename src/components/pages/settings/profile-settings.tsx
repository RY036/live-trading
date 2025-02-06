import { Edit } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PencilIcon } from "@/components/icons/edit";

export const ProfileSettings = () => {
  return (
    <div className="p-8 text-white">
      {/* Header Section */}
      <div className="pb-8">
        <h1 className="mb-2 text-[28px] font-semibold leading-[44px] text-white">
          Account Settings
        </h1>
        <p className="text-sm font-normal leading-normal text-[#9798a1]">
          View and manage account details such as name, email address, contact
          information, etc.
        </p>
      </div>

      {/* Account Details */}
      <div className="mb-8 flex items-center space-x-4">
        <div className="relative">
          <Avatar className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
            <AvatarFallback>RA</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center gap-2 rounded-[100px] border-4 border-[#141118] bg-[#1e1e1e]">
            <PencilIcon className="text-white" />
          </div>
        </div>
        <div>
          <p className="text-sm font-normal leading-normal text-[#9798a1]">
            Account Number
          </p>
          <p className="text-base font-semibold leading-normal text-white">
            1234567890
          </p>
        </div>
        <button className="ml-auto text-green-500">
          <Edit size={20} />
        </button>
      </div>

      {/* Personal Information Section */}
      <div className="mb-8 rounded-xl bg-foreground p-8">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-[#f3f3f3]">
            Personal Information
          </h3>
          <button className="flex items-center space-x-1 text-primary">
            <PencilIcon />
            <span className="text-sm">Edit</span>
          </button>
        </div>
        <div className="flex items-start justify-between">
          <div className="">
            <p className="text-sm font-normal leading-normal text-[#9798a1]">
              First Name
            </p>
            <p className="text-base font-semibold leading-normal text-white">
              Jerome
            </p>
          </div>
          <div className="">
            <p className="text-sm font-normal leading-normal text-[#9798a1]">
              Last Name
            </p>
            <p className="text-base font-semibold leading-normal text-white">
              Jacob
            </p>
          </div>
          <div className="">
            <p className="text-sm font-normal leading-normal text-[#9798a1]">
              Date of Birth
            </p>
            <p className="text-base font-semibold leading-normal text-white">
              October 17, 1990
            </p>
          </div>
          <div className="">
            <p className="text-sm font-normal leading-normal text-[#9798a1]">
              Email Address
            </p>
            <p className="text-base font-semibold text-[#f3f3f3]">
              Jerome1108@gmail.com
            </p>
          </div>
          <div className="">
            <p className="text-sm font-normal leading-normal text-[#9798a1]">
              Username
            </p>
            <p className="text-base font-semibold leading-normal text-[#f3f3f3]">
              Jerome Jacob
            </p>
          </div>
          <div className="">
            <p className="text-sm font-normal leading-normal text-[#9798a1]">
              Phone Number
            </p>
            <p className="text-base font-semibold leading-normal text-white">
              +91 98765 43210
            </p>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="mb-8 rounded-xl bg-foreground p-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-[#f3f3f3]">Address</h3>
          <button className="flex items-center space-x-1 text-green-500">
            <PencilIcon />
            <span className="text-sm">Edit</span>
          </button>
        </div>
        <div className="flex items-start gap-12">
          <div>
            <p className="text-sm font-normal leading-normal text-[#9798a1]">
              Country
            </p>
            <p className="text-base font-semibold leading-normal text-white">
              India
            </p>
          </div>
          <div>
            <p className="text-sm font-normal leading-normal text-[#9798a1]">
              City/State
            </p>
            <p className="text-base font-semibold leading-normal text-white">
              Delhi
            </p>
          </div>
          <div className="">
            <p className="text-sm font-normal leading-normal text-[#9798a1]">
              Street Address
            </p>
            <p className="text-base font-semibold leading-normal text-white">
              No: 12 Connaught Place, New Delhi, Delhi 110001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
