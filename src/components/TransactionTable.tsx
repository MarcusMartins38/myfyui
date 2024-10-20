import React from 'react';
import Tag from './Tag';

export default function TransactionTable() {
  return (
    <div className="overflow-x-auto bg-base-200 rounded-2xl">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-10 w-10">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                </div>
              </div>
            </td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>Purple</td>
            <td>
              <Tag text="Deposited" color="green" />
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-10 w-10">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                </div>
              </div>
            </td>
            <td>Carroll Group</td>
            <td>Red</td>
            <td>
              <span>Deposited</span>
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-10 w-10">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                </div>
              </div>
            </td>
            <td>Rowe-Schoen</td>
            <td>Crimson</td>
            <td>
              <span>Deposited</span>
            </td>
          </tr>
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
}
