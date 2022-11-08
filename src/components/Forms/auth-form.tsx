import * as React from 'react'
import * as UI from '@/components/UI/box'

import { Input, Label } from '@/components/UI/inputs/form-input'

import { Button } from '@/components/UI/buttons/primary'

interface inputProps {
  label: string
  name: string
  placeholder: string
  id: number
  value: string
}

interface AuthFormProps {
  inputs: inputProps[]
  onSubmit: () => void
  onChange: (name: string, e: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  loading?: boolean
}

const Auth: React.FC<AuthFormProps> = ({
  inputs,
  onSubmit,
  onChange,
  type,
  loading,
}) => {
  return (
    <form>
      {inputs.map((item) => (
        <UI.Box key={item.id} mb={25}>
          <UI.Box mb={10}>
            <Label>{item.label}</Label>
          </UI.Box>
          <Input
            name={item.name}
            value={item.value}
            placeholder={item.placeholder}
            key={item.id}
            onChange={(e) => onChange(item.name, e)}
          />
        </UI.Box>
      ))}
      <UI.Box mt={40}>
        <Button
          text={loading ? 'Submitting' : type}
          onClick={() => onSubmit()}
        />
      </UI.Box>
    </form>
  )
}

export default Auth
