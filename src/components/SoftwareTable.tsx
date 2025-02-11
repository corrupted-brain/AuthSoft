import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { Software } from '../types';

interface SoftwareTableProps {
  software: Software[];
}

export function SoftwareTable({ software }: SoftwareTableProps) {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Type</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Name</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Purpose</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">License Type</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Link</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {software.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{item.type}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.purpose}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.licenseType}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        Visit <ExternalLink className="h-4 w-4" />
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}