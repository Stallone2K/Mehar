import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsComponent() {
  return (
    <Tabs defaultValue="candidates" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="candidates">Candidates</TabsTrigger>
        <TabsTrigger value="hired">Work For Us</TabsTrigger>
        <TabsTrigger value="clients">Clients</TabsTrigger>
      </TabsList>
      <TabsContent value="candidates">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            For <span className="text-[#0ACDB7]">Candidates</span>
          </h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Candidates</CardTitle>
            <CardDescription>
              Submit Your Resume And Hear From Us Shortly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="@johndoe@email.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone">Phone</Label>
              <Input id="email" placeholder="+91 9999999999" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="file">Upload File</Label>
              <Input id="file" type="file" className="text-gray-500" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="hired">
        <Card>
          <CardHeader>
            <CardTitle>Get Hired</CardTitle>
            <CardDescription>
              Submit Your Resume And Join Our Team.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="@johndoe@email.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone">Phone</Label>
              <Input id="email" placeholder="+91 9999999999" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="file">Upload File</Label>
              <Input id="file" type="file" className="text-gray-500" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="clients">
        <Card>
          <CardHeader>
            <CardTitle>Hire Us</CardTitle>
            <CardDescription>
              Partner With Us To Create A Successful Business.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="orgname">Name Of Organization</Label>
              <Input id="name" placeholder="ABC .Co" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="@johndoe@abc.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone">Phone</Label>
              <Input id="email" placeholder="+91 9999999999" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="file">Message</Label>
              <Input id="file" placeholder="Enter Message" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
