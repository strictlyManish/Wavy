import { useForm } from "react-hook-form";

export default function Register() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // TODO: Handle login API call here
  };

  return (
    <section className='relative h-screen bg-black flex flex-col md:flex-row justify-center px-4 py-20 gap-20'>
      
      {/* Background Glow */}
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mb-10 size-140 bg-gray-500/35 rounded-full blur-[200px]'></div>
      
      {/* Hero Text */}
      <div className='text-center md:text-left mt-12'>
        <h1 className='font-medium text-3xl md:text-5xl bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent max-w-[470px] mt-4'>
          Every Moment Into Music
        </h1>
        <p className='text-sm/6 text-white max-w-[345px] mt-4 mx-auto md:mx-0'>
          Connect with millions of tracks, create playlists, and enjoy music anytime, anywhere. Experience sound like never before.
        </p> 
      </div>

      {/* Register */}
      <div className='w-full max-w-lg max-md:mx-auto backdrop-blur-sm rounded-xl'>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <div>
            <label htmlFor='name' className='block text-white text-sm mb-2'>Name</label>
            <input 
              id='name'
              type="name"
              placeholder="Wavy"
              {...register("name", {
                required: "Name is required",
                
              })}
              className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/60 placeholder:text-white/40 focus:outline-none focus:border-gray-600 transition'
            />
            {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>}
          </div>

          {/* Email */}

          <div>
            <label htmlFor='email' className='block text-white text-sm mb-2'>Email</label>
            <input 
              id='email'
              type="email"
              placeholder="wavy@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email"
                }
              })}
              className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/60 placeholder:text-white/40 focus:outline-none focus:border-gray-600 transition'
            />
            {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor='password' className='block text-white text-sm mb-2'>Password</label>
            <input 
              id='password'
              type="password"
              placeholder="*******"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
              className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/60 placeholder:text-white/40 focus:outline-none focus:border-gray-600 transition'
            />
            {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}
          </div>

          {/* Terms & Submit */}
          <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0'>
            <p className='text-xs md:text-sm text-white/60 max-w-3xs'>
              By submitting, you agree to our <span className='text-white'>Terms</span> and <span className='text-white'>Privacy Policy</span>.
            </p>
            <button 
              type="submit" 
              className='bg-linear-to-r from-[#00A63E] to-green-500 hover:from-green-500 hover:to-[#00A63E] text-white text-sm px-8 md:px-16 py-3 rounded-full transition duration-300 cursor-pointer'
            >
              Register
            </button>
          </div>
        </form>

        {/* Sign Up Prompt */}
        <p className='text-center text-white/60 text-sm mt-6'>
          Allredy registered?{' '}
          <a href="/login" className='text-[#00A63E] hover:underline'>
            Login
          </a>
        </p>
      </div>
    </section>
  );
}
