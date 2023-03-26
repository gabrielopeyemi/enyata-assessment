import React from 'react'


export default function Input({title, type, onChange, value}) {
  return (
    <div className="flex justify-center mb-8 w-full">
        <div className="relative w-full" data-te-input-wrapper-init>
            <input
                type={type}
                className="border-1 border-celticBlue text-black outline-1 outline-celticBlue peer block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] px-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                data-testid="input"
                placeholder="Example label"
                data-te-input-showcounter="true"
                onChange={onChange}
                value={value}
            />
            <label
              data-testid="label"
              className={`text-frenchGray bg-white pointer-events-none absolute top-0 left-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${
                value ? 'text-xs -translate-y-2 peer-focus:text-primary' : 'peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8]'
              } motion-reduce:transition-none`}
            >
              {title}
            </label>
            <div
            className="absolute w-full text-sm text-neutral-500"
            data-te-input-helper-ref></div>
        </div>
    </div>
  )
}
