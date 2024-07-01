'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { Label } from '@/components/ui/label'

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
    console.log(data)
    // [] TODO: fix the toast message
    // toast({
    //   title: 'You submitted the following values:',
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      <div>
        <Label htmlFor="purchase">Purchase</Label>
        <Input
          type="text"
          id="purchase"
          placeholder="soda"
          {...register('purchase')}
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
          <span className="text-red-400">{errors.value_purchase.message}</span>
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
      <div>
        <Button
          type="submit"
          onClick={() => {
            toast({
              title: 'You submitted the following values:',
              description: <p>registrado</p>,
            })
          }}
        >
          Submit
        </Button>
      </div>
    </form>
  )
}
