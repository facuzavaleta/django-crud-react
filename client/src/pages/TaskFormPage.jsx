import {useForm} from "react-hook-form";
import {createTask} from "../api/tasks.api";

export function TaskFormPage() {
  
  const {register, handleSubmit, formState: {errors}} = useForm()
  
  const onSubmit = handleSubmit(async data => {
    const res = await createTask(data)
    
    console.log(res)
  })

  return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="title"
            {...register("title", {required: true})}
          />
          {errors.title && <span>this field is required</span>}

          <textarea rows="3" placeholder="description"
            {...register("description", {required: true})}
          ></textarea>
          {errors.description && <span>this field is required</span>}

          <button>Save</button>
        </form>
      </div>
    )
  }