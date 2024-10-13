'use client'
import Image from 'next/image';
import React from 'react';

const ContactTable = () => {
    return (
        <div>
             <div>
        <h1 className='text-center text-main text-2xl my-5'>From Main contact</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th> Message</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <Image
                          width={20}
                          height={20}
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <td></td>
                <th>
                  <button className="btn bg-main hover:bg-transparent hover:border-2 hover:border-main text-white hover:text-black btn-xs">
                    Download
                  </button>
                </th>
              </tr>
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
        </div>
    );
};

export default ContactTable;