import React, { useState } from 'react';
const initilialize = {
    email: '',
    password: ''
}
export default function Login(props) {
    const [data, setData] = useState(initilialize);

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.auth(data);
    }

    return (
        <div className='auth-form'>
            <div className="login-form">
                <div className="login">
                    <h1 className="header-login">Welcome to Lions club</h1>
                    <img className="avatar" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAABMlBMVEXu7u4TtL4SoqvQ1NdhQC+5x9D+4bn/2az///8xXXZCaoT08fETsbsAoKk0X3n08vFjx87k6+xxZVf+4LZiwMb/2av/3rFdOyoeuMFkOCMAnqr+4bfX1tnf7O1jOiZiPSv+9unE5Ob/58DO1bnAztSu3eBUMSHU6epCwMi94uRUVEic2Nxsy9FaSju7nX7v3Lf+6s3W39+I0tdCcW1XT0IujY9eQjBJZmBSV0yQ1dmXeV88e3qBYkxqSziuj3LrzaevzLl0wbyUwsexyc+Qp7NpiZtPdYxzkaIqkJM4gYBOXlVmNB1Bcm5TV0vhxKDSso+Ka1R3WETEp4d5n5bX07OohWhLJhhNr7Hnxp6PxruMdV+tlnp5Z1aSfWbN0LT/8uC3y7Xq2MCAvcEIS2qetL5rt7zHiLbBAAAQVElEQVR4nO2diVbbSBaGbXkbkIzteBPxFhNhmyUkEJZgMKbZSfdgYLKQ6SVpOnn/V5iqkixrqZJqE5A5/s/p083itL78t+69VSWVYrGppppqqqmmmmoqnNSxHvtCZAmg5GKFQqHR6NpqNMA3wI9yPy2mmsupsUJ3caXU6+l+9Uql+8V2Q0XwP5PABTfaK6s9QBWPa3GCtDhAzG8sdWM/S6CC6yx0d4FVZCi3AODqSrfw5PnA9XWBX9RcE0DIF8s9WTwwcNobPZ0VayxNz++2c08STwVgeZ2Ty4HXfWq5BeSOlbwYl638YuEJmQcs2+1JIoPqrXSfSGLJFRZlgpl0YOQ9Ph0g0wVHGU66DkPzkclWehGQmXi9xdjjeadGSIaUbz8SnZpbkpUaieqtdh8jMHPdVekpBEe30Xho69QGbdaHTX9cQ4L/zUH3wMMut0RFBqkuLt/uvF/eBFp+v7N3ocSZ+UBgPhyc2tiguD5d1y7eLreaUC0k9J+bby80VryHs47KNF3ber/dnG8lvWrNN1/tKYxw+sNYpxbCTdN15e32fNPHZeMldxjpdP0BrFO7q2FXBch2QBiSyJCayb04I13kCVNdDK3WiCwQzPRumdW63lKUcBTxqGt7yflQMmRda4t11K1EiNYIj8fsJh0Z1PyOxhqXhYisU7uh82r9MmSceeA2LxjhVqMZdOpSKJq2g0n6QWq1GFOKno+iGISj6dq78Bzis245ywjXlg6XWwx3jQMNWcc06vSebLjI0FA1uGBpwvS85FoQjhbfoU+QPjqmNkUunBqOpl/+youWRG0KQ2DKhKNBU9gSpN+6V5f0GVMeHAVaXH/PN9gcdL8ub1HTyYKjQrvgHmxO7za3aCNTDhxFyZZhm0X36pJy4iqjzlGhxRUpaIhu+61CFZriHYrapkHTLyWE5Jiu2Xy/RWOenm8Ire/lGlTbTvqOLN+QmvPbOxdK6KKYvloQYSuETmpMLYtVACzeu72sErxPqW+IsFGiaa9ks8E+c/7XzTC4Fe6ozK1QZuQo2IDm95QwON5kqbZpS6m2GQVbc1lRQuD0POeQK1BvZejvomBrXSjhcHxDLkezeGz9H36TmidNzf+mKBRwKxxRqS4xNOYyWi6Pmv9WFCo4jl2sBssOlPwB19rOKnRweXbf6CMS/uVtSQ7KVvNCUejgmAtBjiEi4Z+vbEtGu1QUajjGxpIpIuPxvZbcmGxuKQo9XI/Ntl0m23ZE1hOo0ALh9CWGqKSv2uiP3pOMlmxd+tkC4PQey2ozyw0IuiK/ACSzbHD0RU5dZEBzTXCqktDsuk0J16OeytE3W1Da9iSP9Ady6FrbOLYAuA1K43IrLGj6hWO0DYf9qhQ6XDYJgqNdSGezTX9rh2T1priwcMVN5/wcnN4wwa3S2bbLguacA1T30+m0SceMBz7SHw0mvu3g2chwizQjrsBWth2tZLW/kIZ06eHHQYeJrtoZ9O8qxWv7Q813BDYiHE1bST3ZtqRM5tzVA8SG8G6vk7R41U7y+nZYqWQqffsTrVckNhKcTrEYy2ibs5Ps3I7ZYGgO166rYcEJf2HQv70DYECVtQ4FGwkuHxqUuUXGmweUSQnoXKVr6YlAbN5+vKl2OjhC8D3wg5vrg1HGBINstzZbsklmI8CFr50w2uZiqw7THi0AvquD65sBCDyHqsnBzX5/bTQEXJVyZqzKqErFhofTVkPY2DrJuCsmq4PXXjYbcHg1Gq2ZGo1GV3fDTK1i+2XrbuIrvngHwvUaIWzMt7JOfKteY9FsQqDKWF4qpHLGbmuCxhsJTl8MNE7tMt+8OVmbtEpAkLBIE1X2bbbNYDYsXC9wQU9lzSTO+tY5EGazi0DzfQgbDi6kDLDfgjzpS6q3wmx2ESD2JYFwqwFlQF1iRnP0k9UrYbbRmI3UTwbD6QFzVHWDg21rPDX1lwBmtit7vOHnAWFwAU1lgedJBnvaPQi1LYzNUQRwE+9wOHKJY5tvjzVOJmgWIMiWuTGNay3ToPnhdGKJ4wnJyZpCtS/ONi4CNMMNC0cscVwhaa8pU5SAULaiVQSa/1GogtIHR1pbULs8aCAozZjshJcAHFvZ+UXlALFVbyof+OBIQakyrZNM9PJjB1MCzC8WFshssPNC3bLjW+ZMoHNQKX+gjEoPHKF851a50A4XzMw9cJaAheHBfvJT9aY/IrGVK1cfb5KfkjcfRxO6ypX513QHfv7tOQ/cBr4KMO4BWOrV0gswu1UHToiDTrK/dgumb5/2h3i2TP/ToA+mBf3Bp+vhGK48NLMS/LrymTIqXXD4vQGepgTaBthgJFX3HeHX/7RmNv7p0cDppwNtv7OG5jm1zG1yYH93CP+aOiPIVj6kNc4Fh93UyXFVgDias92AWbRzFtAf2Ssnw/0rDFt5eH1VGQfn3eCuPE4s151q5xr9pPyams0Jh68CfCGJAEY3+ze4NFnzfO1KJa6kYifKm/19i7pImypdcNgB1+Cqbr94L9+ZUHy0mTA5KwL9gHPC4dbycnzD7QuZ7WrtNowNNwGfLKCwsNlwuArHWd3IbGvPnj37bzGQrXI3uvPRTQoCE9sYTsNsNKq7XAdYEGPy6hnUWkDtzmQOwG8c4NdOMnC8scm6fsxenMpXuUskthFi+zPAt4r5KyMCXPk1I5sJp2HYmBcmLeHX7ca+/R7Ucx2Y1pLY6OubC84/h1O7nGzfCGxpeOV/eKbibrY1xHZLYmMbbjacf7WLb14aDwjK9Oj3W+8qg/vih38gfAIadbPsgfMvwapsu24OvSSxLYTVt8rdwZ8H/kRpojFmSQecbyqQ2+A950cnjTiMfACEFWbwoy/Mo82C8ycTdZWXLV6CrVVAe0Jmw8rcrmJPJDacf+7NVwKgtM8vazWJbOVy+fUv3GhKViZbXFM+Hx4evqbAo0Arfzg8/EXhR1Oy/iIgchaJpjx//pxYDBjZvoA/i58Msvlqt9g5K4oikU2EDLCVfAVO8AyZ/2c27fk3SePt6bHFtUM5vlU+i6FFwRbQfLGxMawkPBibLsW38l+CtkXCRm4smdhEh1skbFrA0gk1W7kials0vlE0zRQhKWpbNGxwiVmUrSLQSEbK1iND1SjZGNaSH5ZNI2WTmqVieSySbcKZJCo2Yon7+sKjN3g49qWth2MjLAwVX/zLo68ENgm2RcbWwxpX/Oplw/smxbbI2DRsqqwteNkyeDbxJBkhG2Ep1mvcAh5NvLZFy4bfH3DDETIJ56qdj82/piCwXuLSSzzcG5vsBd41OYkEyyawhucWofMqpt/AbPni6xtCcSt/kIOGWeeSxkbctSoW0+kKuWyz7AAHs+3KW1f2Kmg+gM+PaLBJyZGIzXejoboiiw0OORIdiUzaYINsvucEuPdxMAJDjgBHRHspDU3JrnvTZGxdHlu8R5rJkdCo70yjkOa/25zvBkMyHNY5AtpriWjZkg9NWvF2wQXdOxONa7itDt5bnkjSsVsfWLS/ZKIpzzE3PclMJlAabp0ZQ1Y5lIqmKJjHqdS2XLa48sU/6DBD7Ye8DImEfXClIJktrigfwnyrfBPZacMpW8LeHCr9bQCKb/3EiyZnxuZiw95jyPh8MIX8a0O+kJTXjozZsDcsq0vyui4Sm7edlM+mdHEhyX3XEz1bzeeb9JjEDzfeu9WeFJt/gmOxSa5wNGyyYzLbJvjG+VzHU2LDNMqWJA847UMxjO0wK7cpIZ71IbcKaPe5F2+KxQC2cubv+vFnqXTEJ05ltl1aqYEWtVx0NQ9ZIpGo14+inbvZktWaaHrbXrJz0DnYyuW/6wmkeuJeGh3haRxkHOMZGES0FedS64Su5idDdMYPSYEZ8BA0x6PrON3HPMv/Y7oajgwF5rGMNeVsUEhyHDmAUcm7s2HT1bBkpnVKNitqXjYgJNkOZsRJ790fHRvrGDhEVzNzo48MKHV8dP/js6IIAQYfjMf3DJxpF8AC0VUHl17AwUE6rGdQRgrKMAF5+Qi9pG0c+4EK0K4SwErUJ5ftHXBjOgIZsM2h4yNOvpBj8VTmp6kAl5Go1z0XncPDnVCgOflYyLLBx2DE4EOnLLO43v1xwotlCotm/HOC/WXDx2bxsdinhZ5ixZBNekcGnguqjmM7nZkxcJ/AoiEhPErbQo6dgaIrA/p9ABgUJlkac3MzZ5gPkdFY8CjOMqQ66KkEQjEIDMqfLE9n52Zm/FGJj0hncN6HN9RUtlEY9wMbWD55k6UxB9lmUt4Ph6Eh80LpAuv2xLgQz+jIEr5keTqL2M440Ey6ILQSlW3B2/r6MS2ZFw7Yhtg8URkakbYCpwuUB1CqbXJzUgofZw7VPbaZbK6opEcD445sHa1tsRhxS+eehcwNB20z2WZTjt9gQAMiwlEf+Ep8hrHEiOasBMaZxTZ7nDI40VIGAY7eNtIcVWclS0wqQSwB4eaga0Djn7JEJNIxfswFn6jmZsNPB1jSiC2rEoD4/I7YvhsOOFY0kFBwbLhtYKKwx5n3eNCsZBmDbKi+nZjBxYmGHXIa44HmmALOZVvCbJvhR09mJ2zIOOaIJBi3y3YQPWblpMdHhpJlDP7brN2nhg3HgwZGnEdgbsP46gf/sa+s+X+idWRbwsolFpvBh5ZK/fAYp3G8a8X7bhwjDCHAOfhPyqwBc5xIto48bISdmyB5cyVnJpnwfbfq23dROFc2wdzlSgPnnuzwh6TFdmL1kydcKcQhV1DyRCSEc72yQyAkTZ1bvp2LsrmCkucVMlDON23pgrahVGLOcQTRUikHGt0x5jjjHC8QFg3JRGLWYhNOJo4Bl6fvI31wk/bkSJQtNWabEWazyzfnYLPgxlVOFx1u9ROb7USU7WhsG9XZ82RZQ060AiTq5zabcDIZDziqJZIA4wrmkBMfbqc226kwmznguPOIDWe+cfFYFA1NTU028USJBlxe/B3sZrIUrm4olZhsc8KdyXEWTrXFItKEa+d17jmAre9zNpt413UM0eS8dLfd+yGcSk4mvol3XanPJVmvlleXFoXZTh1sZ6JsxoosNJhQ1gXZUMcljW1dTkBaKgjCmanEYpsVRRN6H61sODR5s9kEk8l6QUKGlAdXN9PkmE0omch2DSgnBHfu8k2k65LvGpQI3JmLTaAz8T8k9ehwsy42/ilcVGhAnHD1lBw2I0I0XuusrsRm40smhhHJULPFl1Hq5x42nmRiRJNFXOKBO/WwcUzhoo3HsTisO/OwsSdKQ35Vw2udkc6Y9bCxrgc9jGmm2Kwbd1wONrauK+Ik4hWLdXaanLCxJMqHNM0Ug3X1Ux8bQzJ5YNNM0Vt35mOjnsI9vGlsdGgLhysmAdkjmMZGx1ffHpUsRjnsuPrJR4tGJ12BAs4zN6Uhe4wU4leBwrxzB1t4N/lUyJBC6Rxr5mFLQUYEqwYiyoXRmb0JYvseaNv6IycQggKTZv18Lny/20g8TbIYdC8Iz7x3hli1DeOJWuZQgcAHC8EcaRMHGFZ46mCWsHygPcE2JIaRKMR+EjBLBf+zEaf/TBoSwxTy66fispRDld1EhByp
                  s2M7zQMBqJ+RaqqppppqqqmmmmqqqaaaairJ+h/KgxodrhNLaAAAAABJRU5ErkJggg=='/>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label col-form-label-lg">Email</label>
                            <input
                                type="email"
                                class="form-control form-control-lg"
                                id="formGroupExampleInput"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label col-form-label-lg">Password</label>
                            <input
                                type="password"
                                class="form-control form-control-lg"
                                id='formGroupExampleInput2'
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                placeholder="Password"
                                required />
                        </div>
                        <div className="forgot"><a href="/signup">New User/Sign up ??</a></div>
                        <div className="d-grid gap-2">
                            <input class="btn btn-primary" type="submit" value="Signin"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}