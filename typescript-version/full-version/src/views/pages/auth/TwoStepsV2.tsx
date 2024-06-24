'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { OTPInput } from 'input-otp'
import type { SlotProps } from 'input-otp'
import classnames from 'classnames'

// Component Imports
import Form from '@components/Form'

// Style Imports
import styles from '@/libs/styles/inputOtp.module.css'

const Slot = (props: SlotProps) => {
  return (
    <div className={classnames(styles.slot, { [styles.slotActive]: props.isActive })}>
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  )
}

const FakeCaret = () => {
  return (
    <div className={styles.fakeCaret}>
      <div className='w-px h-5 bg-textPrimary' />
    </div>
  )
}

const TwoStepsV2 = () => {
  // States
  const [otp, setOtp] = useState<string | null>(null)

  return (
    <div className='flex bs-full justify-center'>
      <div className='flex bs-full items-center justify-center flex-1 max-md:hidden'>image</div>
      <div className='flex justify-center items-center bs-full is-[480px]'>
        <div>
          <div className='absolute block-start-[33px] inline-start-[38px]'>Logo</div>
          <Typography>Two Step Verification 💬</Typography>
          <Typography>
            We sent a verification code to your mobile. Enter the code from the mobile in the field below.
          </Typography>
          <Typography className='font-medium'>******1234</Typography>
          <Form noValidate autoComplete='off'>
            <Typography>Type your 6 digit security code</Typography>
            <OTPInput
              onChange={setOtp}
              value={otp ?? ''}
              maxLength={6}
              containerClassName='group flex items-center'
              render={({ slots }) => (
                <div className='flex items-center justify-between w-full gap-4'>
                  {slots.slice(0, 6).map((slot, idx) => (
                    <Slot key={idx} {...slot} />
                  ))}
                </div>
              )}
            />
            <Button fullWidth variant='contained' type='submit'>
              Verify my account
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Didn&#39;t get the code?</Typography>
              <Typography color='primary' component={Link} href='/' onClick={e => e.preventDefault()}>
                Resend
              </Typography>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default TwoStepsV2
