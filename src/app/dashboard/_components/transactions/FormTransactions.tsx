'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/use-toast'
import { CheckCheckIcon } from 'lucide-react'

const FormSchema = z.object({
  purchase: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  value_purchase: z.string().min(1, {
    message: 'Minimum value allowed is 1',
  }),
  date_purchase: z.string().min(1, {
    message: 'Minimum value allowed is 1',
  }),
})

type FormData = z.infer<typeof FormSchema>

export function FormTransactions() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      purchase: '',
      value_purchase: '0',
      date_purchase: '1',
    },
  })

  const onSubmit = (data: FormData) => {
    console.log('Imprimindo objeto do forms', data)
    toast({
      title: 'Sucesso ao gravar os dados:',
      description: (
        <div>
          <div className="flex w-full">
            <p className="flex gap-4 text-lg font-medium text-text-primary">
              Registro feito com sucesso <CheckCheckIcon />{' '}
            </p>
          </div>
        </div>
        // <pre className="mt-2 w-[340px] absolute bottom-10 left-0 rounded-md bg-slate-950 p-4">
        //   <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        // </pre>
      ),
      duration: 3000,
      style: { backgroundColor: '#2ecc71' },
    })
  }

  return (
    <div>
      <h4 className="text-center pb-4 text-base font-medium text-text-primary">
        Adicione o registro
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
        <div>
          <Label htmlFor="purchase">Purchase</Label>
          <Input
            type="text"
            id="purchase"
            placeholder="soda"
            {...register('purchase')}
            className="focus:border-none focus:outline-none"
          />
          {errors.purchase && (
            <span className="text-red-400">{errors.purchase.message}</span>
          )}
        </div>
        <div>
          <Label htmlFor="value_purchase">Value of purchase</Label>
          <Input
            type="number"
            id="value_purchase"
            placeholder="$ 12,90"
            {...register('value_purchase')}
          />
          {errors.value_purchase && (
            <span className="text-red-400">
              {errors.value_purchase.message}
            </span>
          )}
        </div>
        <div>
          <Label htmlFor="date_purchase">Date of purchase</Label>
          <Input
            type="number"
            id="date_purchase"
            placeholder="15"
            {...register('date_purchase')}
          />
          {errors.date_purchase && (
            <span className="text-red-400">{errors.date_purchase.message}</span>
          )}
        </div>
        <div className="flex w-full justify-center items-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}
