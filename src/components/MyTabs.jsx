import React from 'react';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';

const MyTabs = () => {
  return (
    <div className='w-full max-w-md px-2 py-16 sm:px-0 mx-auto'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-blue-100/80 p-1'>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                selected ? 'bg-blue-500 text-white' : 'text-blue-700'
              )
            }
          >
            Capsules
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                selected ? 'bg-blue-500 text-white' : 'text-blue-700'
              )
            }
          >
            Starlink
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                selected ? 'bg-blue-500 text-white' : 'text-blue-700'
              )
            }
          >
            Falcon-9
          </Tab>
        </Tab.List>
        <Tab.Panels className='mt-2'>
          <Tab.Panel className='rounded-xl bg-white p-3'>Content 1</Tab.Panel>
          <Tab.Panel className='rounded-xl bg-white p-3'>Content 2</Tab.Panel>
          <Tab.Panel className='rounded-xl bg-white p-3'>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default MyTabs;
